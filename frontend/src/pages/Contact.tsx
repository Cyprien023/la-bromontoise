export default function Contact() {
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Nous Contacter</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Nom" className="border w-full p-2 rounded" />
                <input type="email" placeholder="Email" className="border w-full p-2 rounded" />
                <textarea placeholder="Message" className="border w-full p-2 rounded" rows={4}></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
            </form>
        </div>
    )
}
