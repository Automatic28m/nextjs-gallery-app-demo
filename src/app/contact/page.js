import { Instagram, Mail, MailboxIcon, Pin } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <div className="container max-w-5xl mx-auto my-16">
            <div className="py-16 px-3">
                <h1 className="text-3xl font-bold font-durer">Contact Us</h1>
                <p className="text-gray">
                    We’d love to hear from you. Whether you are inquiring about an artwork, a custom commission, or just want to say hello, the Studio Solstice team is here to connect.
                </p>
            </div>

            <div className="py-16 px-3 grid sm:grid-cols-2 gap-y-16">

                <div>
                    <h1 className="text-3xl font-bold font-durer">General Inquiries</h1>
                    <p className="text-gray flex gap-3 items-center">
                        <Mail size={15} /> <a href="mailto:hello@studiosolstice.com" className='text-blue-500'>hello@studiosolstice.com</a>
                    </p>
                    <p className="text-gray flex flex-col">
                        Phone (Mon–Fri, 10AM–5PM):<br />
                        +1 (555) 123-4567
                    </p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold font-durer">Mailing Address</h1>
                    <p className="text-gray flex gap-3 items-center">
                        Studio Solstice (Online Gallery)<br />
                        123 Solstice Way<br />
                        New York, NY 10001<br />
                        United States
                    </p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold font-durer">Artwork & Orders</h1>
                    <p>For questions about a specific piece, purchase, or shipping:</p>
                    <p className="text-gray flex gap-3 items-center">
                        <Mail size={15} /> <a href="mailto:orders@studiosolstice.com" className='text-blue-500'>orders@studiosolstice.com</a>
                    </p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold font-durer">Collaborations & Press</h1>
                    <p>If you are an artist, writer, or media outlet looking to collaborate:</p>
                    <p className="text-gray flex gap-3 items-center">
                        <Mail size={15} /> <a href="mailto:collab@studiosolstice.com" className='text-blue-500'>collab@studiosolstice.com</a>
                    </p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold font-durer">Follow us</h1>
                    <p>Stay inspired and updated with our seasonal collections.</p>
                    <p className="text-gray flex gap-3 items-center">
                        <Instagram size={15} /> <a href="instagram.com" className='text-blue-500'>@studiosolstice</a>
                    </p>
                    <p className="text-gray flex gap-3 items-center">
                        <Pin size={15} /> <a href="pinterest.com" className='text-blue-500'>Studio Solstice Art</a>
                    </p>
                    <p className="text-gray flex gap-3 items-center">
                        <MailboxIcon size={15} /> <a href="" className='text-blue-500'>Newsletter Signup</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact