# Exercise: consume a web service using async/await

- Time necessary : 1 day
- Work mode : Solo
- Date : 09/10/23

## Mission

Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: [API](https://thatsthespir.it)

The web service sits at this URL: [API](https://thatsthespir.it/api). It is called the endpoint".

## Steps

- Send a request to a remote server via javascript using async/await and try/catch.
- Treat the answer :

    - If the request failed, show an error message to the user.
    - if the request succeed, transform a JSON response into Html, injected in the DOM.

- Make a button to generate another random quote.
- Make it look good via CSS (inspiration).
- Publish it as a [GitHub Page](https://alexandrevdw.github.io/random-quote-using-async-await/)