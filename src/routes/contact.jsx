import { autofocus } from "@solid-primitives/autofocus";
import { createSignal } from "solid-js";

export default function Contact() {
    autofocus
    const [formData, setFormData] = createSignal({
        name: "",
        email: "",
        message: ""
    });
    const [isNameBlurred, setIsNameBlurred] = createSignal(false);
    const [isEmailBlurred, setIsEmailBlurred] = createSignal(false);
    const [isMessageBlurred, setIsMessageBlurred] = createSignal(false);
    const [isFormSubmitted,setIsFormSubmitted] = createSignal(false);

    const isFormValid = () => {
        const { name, email, message } = formData();
        return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form: ", formData());
        setIsFormSubmitted(true);
    }

    return (
        <main>
            {/* Überschrift */}
            <h1>Feedback Form</h1>
            {!isFormSubmitted() ? (
            <div class="contact">
                {/* Feedback Formular */}
                <form onSubmit={handleSubmit}>
                    {/* Eingabefeld für den Namen mit beschreibendem Label */}
                    <div>
                        <label forhtml="name">Name: </label>
                        <input use:autofocus autofocus type="text" id="name" name="name" aria-label="Enter your name" 
                        value={formData().name}  
                        onBlur={() => setIsNameBlurred(true)}
                        onInput={(e) => setFormData({ ...formData(), name: e.target.value })}
                        style={`border-color: ${ isNameBlurred() && formData().name === '' ? 'red' : 'inherit' };`}
                        />
                    </div>
                    {/* Eingabefeld für die Email mit beschreibendem Label */}
                    <div>
                        <label forhtml="email">Email: </label>
                        <input type="text" id="email" name="email" aria-label="Enter your email" 
                        value={formData().email}  
                        onBlur={() => setIsEmailBlurred(true)}
                        onInput={(e) => setFormData({ ...formData(), email: e.target.value })}
                        style={`border-color: ${ isEmailBlurred() && formData().email === '' ? 'red' : 'inherit' };`}/>
                    </div>
                    {/* Textbereich für die Nachricht mit beschreibendem Label */}
                    <div>
                        <label forhtml="message">Message: </label>
                        <textarea type="text" id="message" name="message" aria-label="Enter a message"
                        value={formData().message}
                        onBlur={() => setIsMessageBlurred(true)}  
                        onInput={(e) => setFormData({ ...formData(), message: e.target.value })}
                        style={`border-color: ${ isMessageBlurred() && formData().message === '' ? 'red' : 'inherit' };`}></textarea>
                    </div>
                    {/* Button zum Absenden des Formulars mit beschreibendem Label */}
                    <button type="submit" id="submit" aria-label="Submit" disabled={!isFormValid()}>Submit</button>

                </form>
            </div>
            ) : (
                <div>
                    <p>Thank you for your message!</p>
                </div>
                )}
        </main>
    );
}
