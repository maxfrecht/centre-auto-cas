FROM httpd

RUN cd htdocs && rm index.html
COPY dist/centre-auto-cas/ htdocs/
