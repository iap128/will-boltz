import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  visible: boolean;
}

const BookingCalendar: FC<Props> = ({ visible }) => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/guitar4me/checkride?hide_gdpr_banner=1"
        style={{
          minWidth: '320px',
          height: '700px',
          filter: `blur(${visible ? 0 : 5}px)`,
          //pointerEvents: !visible ? 'none' : 'all',
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
