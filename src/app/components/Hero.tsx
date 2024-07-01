'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
type Event = {
    _id: string;
    title: string;
    banner: string;
    description: string;
    location: string;
    maxUsers: number;
    dateTime: string;
    host: string;
  };

export default function Hero() {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  

  useEffect(() => {
    axios.get('/api/getEvents').then(response => {
      console.log(response); // Logging the response data
      setEvents(response.data);
    });
  }, []);
  
  const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    return (
      <div className="card w-52 h-24 rounded-lg" >
        <img src={event.banner} className="card-img-top rounded-lg" alt={event.title} />
        <div className="card-body">
          <h5 className="card-title font-bold">{event.title}</h5>
          <p className="card-text text-sm">{event.description}</p>
          <p className="card-text"><small className="text-muted text-blue-600">{event.location}</small></p>
          <p className="card-text"><small className="text-muted font-bold">{new Date(event.dateTime).toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: true
          })}</small></p>
          <button onClick={()=>{ router.replace(`/Details/${event._id}`)}} className="btn btn-primary">learn more</button>
          {/* <Link href="/Details" as={`/Details?event=${encodeURIComponent(JSON.stringify(event))}`} passHref className="btn btn-primary">
            Learn More
          </Link>  */}
      </div>
      </div>
    );
  };
  const filteredEvents = events.filter(event => 
    event.title.includes(search) || event.location.includes(search)
  );

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded-lg"
        onChange={e => setSearch(e.target.value)}
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 row-gap-8 p-4">
  {filteredEvents.map(event => (
    <EventCard key={event._id} event={event} />
  ))}
</div>
    </>
  
);
}
