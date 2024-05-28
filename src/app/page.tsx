const mockUrls = [
  "https://utfs.io/f/e3efbb6c-a4e9-4cb2-b523-96518508737c-uzm0qg.jpg",
  "https://utfs.io/f/ce5c9b37-962c-4648-a855-0e1ebf0e2e96-urjojl.jpg",
  "https://utfs.io/f/a6e61f24-6780-4977-a36e-77c4e45bc88a-xhcvig.jpg",
  "https://utfs.io/f/2da622d5-0d10-4772-b9b0-9bd47e755292-phu00g.jpg",
  "https://utfs.io/f/392122b3-018b-481c-8d55-0eddfad638cd-1ay25c.jpg",
  "https://utfs.io/f/4fa7373a-5418-4abe-b984-efba5a802717-t78mjc.jpg",
];

const mockedImages = mockUrls.map((url, index) => ({
  id: url + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockedImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
