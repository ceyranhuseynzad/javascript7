const myFunction = () => {
    const radio = document.getElementsByName('secmek');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log(`Secmek: ${radio[i].value}`);
            break;
        }
    }
};