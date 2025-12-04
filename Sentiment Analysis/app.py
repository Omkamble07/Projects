from flask import Flask, render_template, request
from textblob import TextBlob

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    sentiment_label = ""
    sentiment_polarity = 0.0
    if request.method == 'POST':
        text = request.form['text']
        blob = TextBlob(text)
        sentiment = blob.sentiment

        if sentiment.polarity > 0:
            sentiment_label = "Positive"
        elif sentiment.polarity < 0:
            sentiment_label = "Negative"
        else:
            sentiment_label = "Neutral"

        sentiment_polarity = sentiment.polarity

    return render_template('index.html', sentiment_label=sentiment_label, sentiment_polarity=sentiment_polarity)

if __name__ == '__main__':
    app.run(debug=True)