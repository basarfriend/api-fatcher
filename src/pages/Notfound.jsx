import React, { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    // 1. Jaise hi component load hoga, yeh user ko automatically redirect kar dega
    window.location.replace("https://dich-fashion.webflow.io/404?via=404sdesign");
  }, [])

  return<>
  </>
}

export default NotFound
