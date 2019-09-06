import React from 'react';

export default class ContactForm extends React.Component {
    render() {
        return (
            <div className='contactForm'>
                <h2>Imate pitanje?</h2>
                <form>
                    <div>
                        Ime:
                    </div>
                    <div>
                        <input id='contactFormName' type='text'></input>
                    </div>
                    <div>
                        E-mail:
                    </div>
                    <div>
                        <input id='contactFormEmail' type='text'></input>
                    </div>
                    <div>Poruka:</div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Posalji</button>
                    </div>
                </form>



            </div>
        )
    }
}