import React from 'react'
import '../styles/footer.scss'

export default function Footer() {
    return (
    <section className='footer-parent'>
      <div className="footer-wrapper">
        <span>Blog</span>
        <span>Imprint</span>
        <span>Terms & Conditions</span>
      </div>
     <span id='copywrite'>© 2018 Clonely / Once Shop</span>
    </section>
)
}