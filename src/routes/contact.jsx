import { autofocus } from "@solid-primitives/autofocus";

export default function Contact() {
    autofocus

    return (
        <main>
            {/* Überschrift */}
            <h1>Feedback Form</h1>
            <div class="contact">
                {/* Feedback Formular */}
                <form>
                    {/* Eingabefeld für den Namen mit beschreibendem Label */}
                    <div>
                        <label forhtml="name">Name: </label>
                        <input type="text" id="name" name="name" aria-label="Enter your name" use:autofocus autofocus />
                    </div>
                    {/* Eingabefeld für die Email mit beschreibendem Label */}
                    <div>
                        <label forhtml="email">Email: </label>
                        <input type="text" id="email" name="email" aria-label="Enter your email" />
                    </div>
                    {/* Textbereich für die Nachricht mit beschreibendem Label */}
                    <div>
                        <label forhtml="message">Message: </label>
                        <textarea type="text" id="message" name="message" aria-label="Enter a message"></textarea>
                    </div>
                    {/* Button zum Absenden des Formulars mit beschreibendem Label */}
                    <button type="submit" id="submit" aria-label="Submit">Submit</button>

                </form>
            </div>
        </main>
    );
}
