## IpayAfrica

### Intro

Module for integrating ipay payment gateway in your application.
Both Posix and Windows platforms are supported.

### How to Install

```bash
npm install -g ipayafrica
```

### How to use

```javascript

const Ipay = require('ipayafrica');
const ipay = new Ipay.IpayAfrica({vendor_id:'demo',hash_key:'demo',live:false});
const request = {
 order_id:'123456',
 invoice_id:'123456',
 amount:500,
 telephone:'0725727693',
 email:'francisthiongo@gmail.com',
 currency:'KES',
 param1:'',
 param2:'',
 param3:'',
 param4:'',
};
ipay.Rest(request,function(err,res){
 
});

```

### Contribution

Pull requests for Bug fixes and features  are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

#### Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

#### DISCLAIMER

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
