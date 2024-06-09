import wave from '../../assets/imgs/waveEXplore.svg'
import { PlaceholdersAndVanishInput } from '../ui/PlaceHolder'

const searchBox = () => {
  const placeholders = [
    "Software Engineer",
    "Google Corp",
    "Quality Assurance",
    "Data Analyst",
    "Microsoft",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-80 w-full overflow-y-hidden mt-[64px] bg-black flex items-center"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default searchBox