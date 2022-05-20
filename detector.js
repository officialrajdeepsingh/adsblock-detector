class adsDetector {
  getGoogleInsHTML = document.querySelectorAll('ins > ins')
  getGoogleAllInsHTML = document.querySelectorAll('ins')

  status = this.getGoogleAllInsHTML[0]?.getAttribute('data-adsbygoogle-status');

  constructor() {
     console.log('adsblock detector npm package is start working ')
  }


  total() {
    if (this.getGoogleAllInsHTML.length > 0) {
      if (this.status == null) {
        return "Ads blocker active"
      } else {
        return  this.getGoogleInsHTML.length 
      }
    } else {
      return "google ads not detected!"
    }
  	
    
    
  }

  check() {
    if (this.getGoogleAllInsHTML.length > 0) {
      if (this.status== null) {
        return true
      } else {
        return false
      }
    } else {
      return "google ads not detected!"
    }
  }

}

export default adsDetector