import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html
        dir={this.props.locale === 'ar' ? 'rtl' : 'ltr'}
        lang={this.props.locale || 'en'}
        scroll-smooth
      >
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
