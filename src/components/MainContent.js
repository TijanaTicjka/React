import './MainContent.css'
export const MainContent = () => {
    const divItems = [
        {title: "Title 1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui architecto tempore ea quia. Voluptatibus quisquam in fugit saepe ipsam reprehenderit necessitatibus cumque. Odit, sit placeat ad delectus numquam architecto veniam."},
        {title : "Title 2", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, fugit aperiam tempore dicta debitis accusantium nulla molestias reprehenderit quaerat dolorem corrupti laboriosam odit! Natus repudiandae, sequi ea culpa iure at!"},
        {title : "Title 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ipsum ut quibusdam aliquam ex animi eligendi, distinctio repellendus? Eligendi autem enim nulla fuga atque quis nisi, facere maxime tenetur et?"},
        {title : "Title 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto non laudantium quas amet numquam pariatur voluptates iure blanditiis mollitia soluta alias delectus tenetur aperiam quia, corporis quae. Asperiores, fuga."},
        {title : "Title 5", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in a ut itaque, cupiditate debitis esse fugit dolorem quas impedit. Voluptate saepe distinctio non voluptatem accusamus quos dolorum doloremque inventore?"},
        {title : "Title 6", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ad, perspiciatis vero voluptate molestias officia, cumque consequatur debitis, a eaque ipsa necessitatibus nam doloremque architecto deleniti est modi placeat? Maxime!"}
    ]

    return (
        <div className="main">
            {divItems.map((element) => (
                <div className="item">
                    <h4>{element.title}</h4>
                    <p>{element.content}</p>
                </div>
            ))}
        </div>
    )
}
