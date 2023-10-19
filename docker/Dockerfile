FROM ruby:3.2.2-alpine

# Install standard library for compiling native extension
#
# - less: fix pager in pry caused by alpine
# - linux-headers: puma
# - postgresql-client, postgresql-dev: pg
# - nodejs: execjs
# - npm: mjml
#
RUN apk add --update --no-cache \
  build-base \
  git \
  tzdata \
  less \
  linux-headers \
  postgresql-client \
  postgresql-dev \
  nodejs \
  npm

# update to bundler v2
RUN gem install bundler

# switch from npm to yarn
RUN npm install --global yarn

# Use Tokyo Timezone
ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /web
WORKDIR /web

COPY /docker/web/ /docker/
ENTRYPOINT ["sh", "/docker/entrypoint.sh"]

CMD ["sh", "/docker/command.sh"]
