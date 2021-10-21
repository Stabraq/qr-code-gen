import { useState } from 'react';
import { InputField } from './components/InputField';
import { QRCode } from 'react-qrcode-logo';
import { SelectField } from './components/SelectField';
import { ImageUploadField } from './components/ImageUploadField';
import { CheckboxField } from './components/CheckboxField';
import ReactJson from 'react-json-view';
import html2canvas from 'html2canvas';
const App = () => {
  const [state, setState] = useState({
    // we init this cause is more practical with TS, but eyeRadius is an optional prop
    eyeradius_0_outer_0: 50,
    eyeradius_0_outer_1: 0,
    eyeradius_0_outer_2: 0,
    eyeradius_0_outer_3: 0,
    eyeradius_0_inner_0: 50,
    eyeradius_0_inner_1: 0,
    eyeradius_0_inner_2: 0,
    eyeradius_0_inner_3: 0,
    eyeradius_1_outer_0: 0,
    eyeradius_1_outer_1: 50,
    eyeradius_1_outer_2: 0,
    eyeradius_1_outer_3: 0,
    eyeradius_1_inner_0: 0,
    eyeradius_1_inner_1: 50,
    eyeradius_1_inner_2: 0,
    eyeradius_1_inner_3: 0,
    eyeradius_2_outer_0: 0,
    eyeradius_2_outer_1: 0,
    eyeradius_2_outer_2: 0,
    eyeradius_2_outer_3: 50,
    eyeradius_2_inner_0: 0,
    eyeradius_2_inner_1: 0,
    eyeradius_2_inner_2: 0,
    eyeradius_2_inner_3: 50,
  });
  const handleChange = ({ target }) => {
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const handleDownload = () => {
    html2canvas(document.querySelector('#react-qrcode-logo')).then(function (
      canvas
    ) {
      const link = document.createElement('a');
      link.download = 'react-qrcode-logo.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  const buildEyeRadiusInput = (id) => {
    return (
      <InputField
        name={id}
        type='range'
        handleChange={handleChange}
        min={0}
        max={50}
        hideLabel
        defaultValue={state[id]}
      />
    );
  };
  return (
    <div className='app'>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
                handleChange={handleChange}
              />
              <SelectField
                name='ecLevel'
                options={['L', 'M', 'Q', 'H']}
                handleChange={handleChange}
              />
              <CheckboxField name='enableCORS' handleChange={handleChange} />
              <InputField
                name='size'
                type='range'
                handleChange={handleChange}
                min={100}
                max={250}
              />
              <InputField
                name='quietZone'
                type='range'
                handleChange={handleChange}
                min={20}
                max={50}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '4px',
                  justifyContent: 'space-around',
                }}
              >
                <InputField
                  name='bgColor'
                  type='color'
                  defaultValue='#ffffff'
                  handleChange={handleChange}
                />
                <InputField
                  name='fgColor'
                  type='color'
                  defaultValue='#ff5500'
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div
              style={{
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
              }}
            >
              <ImageUploadField name='logoImage' handleChange={handleChange} />
              <InputField
                name='logoWidth'
                type='range'
                handleChange={handleChange}
                min={20}
                max={250}
              />
              <InputField
                name='logoHeight'
                type='range'
                handleChange={handleChange}
                min={20}
                max={250}
              />
              <InputField
                name='logoOpacity'
                type='range'
                handleChange={handleChange}
                min={0}
                max={1}
                step={0.1}
              />
              <SelectField
                name='qrStyle'
                options={['squares', 'dots']}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div style={{ padding: '15px' }}>
            <p>eyeRadius</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <p style={{ fontSize: 14 }}>Top left eye</p>
                <p style={{ fontSize: 12 }}>Outer</p>
                {buildEyeRadiusInput('eyeradius_0_outer_0')}
                {buildEyeRadiusInput('eyeradius_0_outer_1')}
                {buildEyeRadiusInput('eyeradius_0_outer_2')}
                {buildEyeRadiusInput('eyeradius_0_outer_3')}
                <p style={{ fontSize: 12 }}>Inner</p>
                {buildEyeRadiusInput('eyeradius_0_inner_0')}
                {buildEyeRadiusInput('eyeradius_0_inner_1')}
                {buildEyeRadiusInput('eyeradius_0_inner_2')}
                {buildEyeRadiusInput('eyeradius_0_inner_3')}
              </div>
              <div>
                <p style={{ fontSize: 14 }}>Top right eye</p>
                <p style={{ fontSize: 12 }}>Outer</p>
                {buildEyeRadiusInput('eyeradius_1_outer_0')}
                {buildEyeRadiusInput('eyeradius_1_outer_1')}
                {buildEyeRadiusInput('eyeradius_1_outer_2')}
                {buildEyeRadiusInput('eyeradius_1_outer_3')}
                <p style={{ fontSize: 12 }}>Inner</p>
                {buildEyeRadiusInput('eyeradius_1_inner_0')}
                {buildEyeRadiusInput('eyeradius_1_inner_1')}
                {buildEyeRadiusInput('eyeradius_1_inner_2')}
                {buildEyeRadiusInput('eyeradius_1_inner_3')}
              </div>
              <div>
                <p style={{ fontSize: 14 }}>Bottom left eye</p>
                <p style={{ fontSize: 12 }}>Outer</p>
                {buildEyeRadiusInput('eyeradius_2_outer_0')}
                {buildEyeRadiusInput('eyeradius_2_outer_1')}
                {buildEyeRadiusInput('eyeradius_2_outer_2')}
                {buildEyeRadiusInput('eyeradius_2_outer_3')}
                <p style={{ fontSize: 12 }}>Inner</p>
                {buildEyeRadiusInput('eyeradius_2_inner_0')}
                {buildEyeRadiusInput('eyeradius_2_inner_1')}
                {buildEyeRadiusInput('eyeradius_2_inner_2')}
                {buildEyeRadiusInput('eyeradius_2_inner_3')}
              </div>
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
              eyeRadius: [
                {
                  outer: [
                    state.eyeradius_0_outer_0,
                    state.eyeradius_0_outer_1,
                    state.eyeradius_0_outer_2,
                    state.eyeradius_0_outer_3,
                  ],
                  inner: [
                    state.eyeradius_0_inner_0,
                    state.eyeradius_0_inner_1,
                    state.eyeradius_0_inner_2,
                    state.eyeradius_0_inner_3,
                  ],
                },
                {
                  outer: [
                    state.eyeradius_1_outer_0,
                    state.eyeradius_1_outer_1,
                    state.eyeradius_1_outer_2,
                    state.eyeradius_1_outer_3,
                  ],
                  inner: [
                    state.eyeradius_1_inner_0,
                    state.eyeradius_1_inner_1,
                    state.eyeradius_1_inner_2,
                    state.eyeradius_1_inner_3,
                  ],
                },
                {
                  outer: [
                    state.eyeradius_2_outer_0,
                    state.eyeradius_2_outer_1,
                    state.eyeradius_2_outer_2,
                    state.eyeradius_2_outer_3,
                  ],
                  inner: [
                    state.eyeradius_2_inner_0,
                    state.eyeradius_2_inner_1,
                    state.eyeradius_2_inner_2,
                    state.eyeradius_2_inner_3,
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
      <button type='button' onClick={handleDownload} style={{ margin: '20px' }}>
        Download QR Code
      </button>
      <div style={{ marginLeft: '15px' }}>
        <p>State snapshot (debug purposes)</p>
        <ReactJson src={state} style={{ marginBottom: 40 }} />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          style={{ fontSize: 12 }}
        >
          Learn React
        </a>
      </div>
    </div>
  );
};
export default App;
