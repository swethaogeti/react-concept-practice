import { useImmer } from "use-immer";
export const Immer = () => {
  const [person, setPerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg"
    }
  });

  function handleTitleChange(e) {
    setPerson((draft) => (draft.artwork.title = e.target.value));
  }

  function handleNameChange(e) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleCityChange(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }
  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};
