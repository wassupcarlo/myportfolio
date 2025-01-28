import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <section id="experience-section">
            <h2>Experience</h2>
            <section className="experience-section">
                <div id="ria-img-div">
                    <a href="https://www.riamoneytransfer.com/">
                        <img id="ria-logo" src="src\assets\ria_money_transfer-logo_brandlogos.net_higbl.png"
                        alt="Ria Money Transfer Logo"></img>
                    </a>
                </div>
                <div id="ria-job-desc-div">
                    <h3>Teller</h3>
                    <h4>2021 - Now</h4>
                    <ul>
                        <li>Handled transactions for clients, including check cashing, deposits, withdrawals, transfers, and account openings.</li>
                        <li>Identified customers’ needs and provided information on new products and services.</li>
                        <li>Balanced cash drawers at the start and end of the shift.</li>
                        <li>Responsible for opening and closing the store.</li>
                        <li>Verified customer identities and maintained confidentiality of all information.</li>
                        <li>
                            Performed troubleshooting and maintenance of computers and printers, diagnosing and resolving hardware and software issues.
                        </li>
                        <li>
                            Completed training in anti-money laundering (AML) and data protection laws, gaining a strong understanding of compliance
                            requirements and best practices for safeguarding sensitive information.
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Experience;