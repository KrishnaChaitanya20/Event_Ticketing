FROM python:3.11-slim

WORKDIR /Backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENTRYPOINT [ "waitress-serve" ]

CMD [ "--port=5000", "wsgi:app"]