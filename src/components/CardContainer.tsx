import Card from "./Card";

type Props = {};

export default function CardContainer({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl">
      <Card
        image="https://picsum.photos/300/200?random=1"
        name="Riedmann Andres"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=2"
        name="Morit"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=3"
        name="Kronabeiter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=4"
        name="Luggi"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=5"
        name="Jan Fehler"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=6"
        name="Noel Fielmann"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=7"
        name="Diego Knechtner"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
      <Card
        image="https://picsum.photos/300/200?random=8"
        name="Ronny Oppman"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
      />
    </div>
  );
}
