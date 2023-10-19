#!/bin/sh

bundle_install() {
  bundle config build.puma "--with-cflags='-D PUMA_QUERY_STRING_MAX_LENGTH=64000'"
  bundle check || bundle install --jobs 20 --retry 5
  bundle clean --force # remove any old binaries
}

#worker(){
  # sidekiq -q default -q main_job -q little_job -q scraping_job
#}

is_ruby () {
  case $1 in
    ruby|rake|bundle|rails|rspec) return 0;;
    *) return 1;;
  esac
}

if is_ruby "$1"; then
  bundle_install
  # worker
elif [ "$2" = '/docker/command.sh' ]; then
  bundle_install
  # worker

  # sometime the pid file stays around even after the server is shut down, not sure why...
  rm tmp/pids/server.pid 2>/dev/null
fi

exec "$@"
