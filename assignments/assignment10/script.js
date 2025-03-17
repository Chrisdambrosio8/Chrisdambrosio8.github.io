class Toy {
    constructor(name, price, ageRange, rating, pic) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        const div = document.createElement("div");
        div.classList.add("Toy");

        const image = this.picture(this.pic);

        const tooltip = this.createTooltip();

        div.appendChild(image);
        div.appendChild(tooltip);

        image.addEventListener("mouseover", () => {
            tooltip.style.display = "block";
            image.style.opacity = .3;
        });

        image.addEventListener("mouseout", (event) => {
            if (!div.contains(event.relatedTarget)) {
                 tooltip.style.display = "none";
                 image.style.opacity = 1;
            }            
        });

        return div;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    createTooltip() {
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.style.display = "none"; 

        tooltip.innerHTML = `
            <h1>${this.name}</h1>
            <p><b>Price:</b> $${this.price}</p>
            <p><b>Age Range:</b> ${this.ageRange}</p>
            <p><b>Rating:</b> ${this.rating}</p>
        `;

        return tooltip;
    }
}

const showToys = () => {
    const toyList = document.getElementById("toys-block");
    const toys = [];
    toys.push(new Toy("American Girl Doll", 5.99, "6-10", "4 stars", "toy1.jpg"));
    toys.push(new Toy("Train", 8.99, "2-4", "5 stars", "toy2.jpg"));
    toys.push(new Toy("Cars", 7.50, "2-6", "5 stars", "toy3.jpg"));
    toys.push(new Toy("Barbie", 5.99, "3-8", "4 stars", "toy4.jpg"));
    toys.push(new Toy("Kitchen Set", 39.99, "3-7", "5 stars", "toy5.jpg"));
    toys.push(new Toy("Legos", 20.00, "3-7", "5 stars", "toy6.jpg"));

    toys.forEach(toy => {
        toyList.append(toy.item);
    });
}
window.onload = () => {
    showToys();
};