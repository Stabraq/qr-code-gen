import { useState } from 'react';
import { InputField } from './components/InputField';
import { QRCode } from 'react-qrcode-logo';
import ReactJson from 'react-json-view';
import html2canvas from 'html2canvas';
const App = () => {
  const [state, setState] = useState({
    // we init this cause is more practical with TS, but eyeRadius is an optional prop
    eyeRadius: [
      {
        outer: [50, 0, 0, 0],
        inner: [50, 0, 0, 0],
      },
      {
        outer: [0, 50, 0, 0],
        inner: [0, 50, 0, 0],
      },
      {
        outer: [0, 0, 0, 50],
        inner: [0, 0, 0, 50],
      },
    ],
    fgColor: '#ff5500',
    size: '350',
    value: 'https://stabraq.netlify.app/preferences/main/user/',
    ecLevel: 'Q',
    qrStyle: 'dots',
    logoImage: 'logo.png',
    logoWidth: 130,
    mobile: '',
  });
  const handleChange = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));

    if (target.name === 'value') {
      setState((prevState) => ({
        ...prevState,
        value: `https://stabraq.netlify.app/preferences/main/user/?mobile=${target.value}`,
        mobile: target.value,
      }));
    }
  };
  const handleDownload = () => {
    html2canvas(document.querySelector('#react-qrcode-logo')).then(function (
      canvas
    ) {
      const link = document.createElement('a');
      link.download = `qrcode-${state.mobile}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const shareQR = () => {
    html2canvas(document.querySelector('#react-qrcode-logo')).then(
      async function (canvas) {
        const base64url = canvas.toDataURL();
        console.log(base64url);
        const blob = await (await fetch(base64url)).blob();
        const file = new File([blob], `qrcode-${state.mobile}.png`, {
          type: blob.type,
        });
        navigator.share({
          title: 'Hello',
          text: 'Check out your QR code!',
          files: [file],
        });
      }
    );
  };

  const sendSMS = () => {
    window.open(`https://wa.me/2${state.mobile}?text=QR-Code`);
  };
  return (
    <div className='app'>
      <div>
        <div
          style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            <div
              style={{
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
              }}
            >
              <InputField
                name='value'
                type='text'
                maxLength={11}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: 400,
            height: 400,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #d4fafc',
            borderRadius: '50px',
            backgroundColor: '#d4fafc',
          }}
        >
          <QRCode
            {...{
              ...state,
            }}
          />
        </div>
      </div>
      <button type='button' onClick={handleDownload} style={{ margin: '20px' }}>
        Download QR Code
      </button>
      <button type='button' onClick={shareQR} style={{ margin: '20px' }}>
        Share QR Code
      </button>
      <button type='button' onClick={sendSMS} style={{ margin: '20px' }}>
        Send SMS
      </button>
      {/* <div style={{ marginLeft: '15px' }}>
        <p>State snapshot (debug purposes)</p>
        <ReactJson src={state} style={{ marginBottom: 40 }} />
      </div> */}
    </div>
  );
};
export default App;
