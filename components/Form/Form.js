const Form = () => {
    return (
        <form action="./api/posts" method="POST">
            <div>
                <label htmlFor="pseudo">Pseudo :{' '}</label>
                <input type="text" id="pseudo" name="pseudo"/>
            </div>
            <div>
                <label htmlFor="message">Message :{' '}</label>
                <textarea id ="message" name="message" placeholder="Ecrivez votre message ici"></textarea>
            </div>
            <div>
                <input type="submit" value="Envoyer" />
            </div>
        </form>
    )
}

export default Form
