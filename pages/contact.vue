<template>
    <div>
        <div class="bg-[url('/contacts-page.jpg')]">
            <Header />
            <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-white">
                Contact
            </h1>
        </div>
        <body>
            <div id="title">
                <h3>We'd love to hear from you</h3>
                <p>Contact us using the form and we'll get back to you right away.</p>
            </div>
            <div id="contact-info">
                <div id="email">
                    <svg />
                    <p>example@email.com</p>
                </div>
                <div id="phone">
                    <svg />
                    <p>+6012-3456 789</p>
                </div>
            </div>
            <div id="contact-form">
                <div id="form inputs"/>
                    <div>
                        <label for="name">Name</label>
                        <input id="name" type="" placeholder="Enter your name" class="" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="" placeholder="Enter your email" class="" />
                    </div>
                    <div>
                        <label for="phone number">Phone Number</label>
                        <input id="phone number" type="" placeholder="Enter your phone no." class="" />
                    </div>
                    <div>
                        <label for="subject">Subject</label>
                        <input id="subject" type="" placeholder="Subject" class="" />
                    </div>
                    <div>
                        <label for="message">Phone Number</label>
                        <input id="message" type="text area" placeholder="Enter your phone no." class="" />
                    </div>
                </div>
                <button>send</button>
            </div>
            <div id="social media">
                <a href=""><img src="" alt="facebook" class=""></a>
                <a href=""><img src="" alt="instagram" class=""></a>
                <a href=""><img src="" alt="youtube" class=""></a>
            </div>
            <div id="newsletter">
                <h5>Newsletter</h5>
                <p>Get exclusive offers &#38; the latest updates from Testo Burgers and no spam, ever.</p>
                <input id="email" type="email" placeholder="Enter your email address" class="" />
                <button>submit</button>
            </div>
        </body>
        <Information />
        <Footer />
    </div>
</template>
