import React, { Component, Fragment } from "react";
import { quotes } from "../resources/data.js";
import quotesBanner from "../resources/quotesBanner.jpg";

class QuoteBanner extends Component {
  state = {
    quotes: quotes,
    chosenQuote: 1,
  };

  HandleQuoteChange = value => {
    const currentState = this.state.chosenQuote;
    const limit = this.state.quotes.length;
    let newState;
    if (currentState + value > limit) {
      newState = 1;
    } else if (currentState + value === 0) {
      newState = limit;
    } else {
      newState = currentState + value;
    }
    this.setState({ chosenQuote: newState });
  };

  render() {
    const { chosenQuote } = this.state;
    return (
      <div id="quote-banner">
        <img src={quotesBanner} alt="Quotes banner"></img>
        {quotes
          .filter(item => item.id === chosenQuote)
          .map(quote => (
            <Fragment key={`${quote.id}-fragment`}>
              <div key={quote.id} id="quote-content">
                <span className="quote-sign left">“</span>
                <h3 key={`${quote.id}-title`}>{quote.quote}</h3>
                <p key={`${quote.id}-content`}>
                  <span className="quote-sign right">”</span>
                  {quote.name} - {quote.role}
                </p>
                <div className="quote-buttons" key={`${quote.id}-buttons`}>
                  <button
                    key={`${quote.id}-button1`}
                    onClick={() => this.HandleQuoteChange(-1)}>
                    {"<"}
                  </button>
                  <button
                    key={`${quote.id}-button2`}
                    onClick={() => this.HandleQuoteChange(1)}>
                    {">"}
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    );
  }
}

export default QuoteBanner;
