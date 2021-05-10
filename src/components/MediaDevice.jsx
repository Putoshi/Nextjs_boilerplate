import React from 'react';
import Select from 'react-select';

export default class MediaDevice extends React.Component
{

  constructor(props)
  {
    super(props);

    this.state = {
      deviceList: {
        micDeviceList: [],
        cameraDeviceList: []
      }
    };
  }

  componentDidMount()
  {
    console.log("MediaDevice");
    this.cameraDeviceOptions().then((d)=>{
      this.setState({
        deviceList: d
      });
      // console.log(this.state.deviceList);
    });
  }

  componentWillUnmount()
  {
  }

  componentDidUpdate() {
  }

  async cameraDeviceOptions() {
    // console.log(navigator);

    const cameraDeviceList = [];
    const micDeviceList = [];

    if (typeof window !== 'undefined'){
      await navigator.mediaDevices.enumerateDevices()
        .then((devices) =>{
          devices.forEach((device) => {
            // console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
            switch(device.kind){
              case 'videoinput':
                cameraDeviceList.push(Object.assign(device, {value:device.deviceId}));

                break;
              case 'audioinput':
                micDeviceList.push(Object.assign(device, {value:device.deviceId}));
                break;

            }
          });
        })
        .catch((err) => {
          console.log(err.name + ": " + err.message);
        });

      return {
        cameraDeviceList,
        micDeviceList
      }

    } else {
      return {
        cameraDeviceList: this.state.deviceList?.cameraDeviceList,
        micDeviceList: this.state.deviceList?.micDeviceList
      }
    }
  }


  render()
  {
    // console.log("render");
    // console.log(this.state.deviceList);
    return (
      <div className="SelectDevice">
        <Select instanceId="SelectDevice__Mic" placeholder="Mic" className="SelectDevice__Mic" options={this.state.deviceList.micDeviceList} />
        <Select instanceId="SelectDevice__Camera" placeholder="Camera" className="SelectDevice__Camera" options={this.state.deviceList.cameraDeviceList} />
        {/*<Select placeholder="Mic" className="SelectDevice__Mic" options={micDeviceOptions}  onChange={onMicChange}/>*/}
        {/*<Select placeholder="Camera" className="SelectDevice__Camera" options={cameraDeviceOptions}  onChange={onCameraChange}/>*/}
      </div>
    );
  }
}



