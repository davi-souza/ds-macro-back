if ('serviceWorker' in navigator && 'Notification' in window && 'PushManager' in window) {
  navigator.serviceWorker
  .register('/sw.js')
  .then((reg) => {
    console.log('[ServiceWorker] Registered')
    Notification.requestPermission().then(permission => {
      console.log('[ServiceWorker] Notification permission', permission)
      reg.pushManager.getSubscription().then((sub) => {
        if(sub === null){
          console.log('[ServiceWorker] Push Manager subscription null')
        }
        else{
          console.log('[ServiceWorker] Push Manager subscription')
        }
      })
    })
  }).catch(function(err) {
    console.log('Service Worker registration failed: ', err)
  })
}

if(Notification.permission === "granted"){
  /* --- */
} else if(Notification.permission === "blocked") {
  Notification.requestPermission((status) => {
      console.log('[ServiceWorker] Notification permission status:', status)
  })
} else {
  Notification.requestPermission((status) => {
      console.log('[ServiceWorker] Notification permission status:', status)
  })
}
