Ads Block Detector works for your website. It is very easy to step into your website. Ad Block Detector work for all browsers.

### Note:
Ads Block Detector only work for Google Adsense. 


## How to use Ads Block Detector?
You can use an ads block detector with NPM and CDN.

### NPM
```javascript
        import adsblock from './node_modules/adsblock-detector/dist/build.js';
            or 
        import adsblock from 'adsblock-detector';

        const ads = new adsblock()

        console.log(ads.total())
        console.log(ads.check() )

```

### CDN
 You can copy lalest version of ads block detector CDN link: `https://unpkg.com/adsblock-detector`


```html

    <script type="module" src="https://unpkg.com/adsblock-detector@1.0.4/dist/build.js">
    </script>

    <script type="module" >
        
        import adsDetector from "./node_modules/adsblock-detector/dist/build.js"

        const ads = new adsDetector()

        console.log(ads.total())
        console.log(ads.check())
    </script>
```

## Inbuilt functions
In the ads block detector npm package, two inbuilt functions are available.

1. total()
2. check()

## total()
Help provide the total number of ads shown on your website.

```javascript
 
    const ads = new adsDetector()
    
    let totalAds = ads.total()

```

## check()
The check function provides adblocker is active or not in the client or user web browser.

```javascript
 
    const ads = new adsDetector()
    
   let adblocker = ads.check()

```