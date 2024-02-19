
fetch("https://api.openbrewerydb.org/v1/breweries")
    .then((res) => res.json())
    .then(data => {
        const all = document.querySelector(".global_container")
        data.forEach(brewery => {
            const claso = document.createElement('div')
            claso.setAttribute("class", "wraper")
            let ido = document.createElement('p')
            let ido_1 = document.createElement('p')
            let ido_2 = document.createElement('p')
            let ido_3 = document.createElement('p')
            ido.setAttribute("id", "cool")
            ido_1.setAttribute("id", "cool")
            ido_2.setAttribute("id", "cool")
            ido_3.setAttribute("id", "cool")
            ido.textContent = `Nom: ${brewery.name}`;
            ido_1.textContent = `Type de brasserie: ${brewery.brewery_type}`;
            ido_2.textContent = `Adresse: ${brewery.address_1}, ${brewery.city}, ${brewery.state_province} ${brewery.postal_code}`;
            ido_3.textContent = `Site web: ${brewery.website_url}`;
            console.log("-".repeat(30));
            claso.append(ido, ido_1, ido_2, ido_3)
            all.append(claso)
        });
    })