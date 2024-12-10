import { useState, useEffect } from "react";
import Card from "./Card";

type Person = {
  id?: number;
  firstname: string;
  lastname: string;
  image: string;
  birthday: string;
};

export default function CardContainer() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://10.115.1.35:8055/items/people").then((response) =>
      response.json().then((data: any) => {
        setPeople(data.data);
      })
    );
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl">
      {people.map((person) => (
        <Card
          key={person.id}
          image={`http://10.115.1.35:8055/assets/${person.image}`}
          name={`${person.firstname} ${person.lastname}`}
          description={`Birthday: ${formatDate(person.birthday)}`}
        />
      ))}
    </div>
  );
}
