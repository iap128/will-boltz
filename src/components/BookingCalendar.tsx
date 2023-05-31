import { Helmet } from 'react-helmet';

const BookingCalendar = () => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/guitar4me/checkride?hide_gdpr_banner=1"
        style={{
          minWidth: '320px',
          height: '700px',
        }}
      ></div>

      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Helmet>
    </>
  );
};

export default BookingCalendar;