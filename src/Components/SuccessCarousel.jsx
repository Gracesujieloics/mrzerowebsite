import React, { useState } from 'react';


const reviews = [
    {
        id: 1,
        platform: 'Capterra',
        date: 'Feb. 2024',
        rating: 4,
        review: 'Good platform and easy to use. Functionalities are clear and simple. Ergonomic interface. Quickly easy to understand, even if you never used Eventtia.',
        reviewer: 'Lucie Positello',
        position: 'Corporate Innovation Manager - Choose Paris Region',
    },
    {
        id: 2,
        platform: 'G2',
        date: 'Mar. 2023',
        rating: 5,
        review: 'Quick and reliable customer support. Team that thinks along on how to tackle needs of the event. User friendly set-up with numerous fun and interactive elements.',
        reviewer: 'Guna Alvika',
        position: 'Events & Marketing Coordinator - NABC',
    },
    {
        id: 3,
        platform: 'Capterra',
        date: 'Dec. 2023',
        rating: 5,
        review: 'I really liked the platform\'s practicality and versatility in adapting to our needs, regardless of the nature of the event, making the processes more efficient.',
        reviewer: 'Bexi Perdomo',
        position: 'Academic Manager and Researcher - UCAL',
    },
    {
        id: 4,
        platform: 'G2',
        date: 'Apr. 2024',
        rating: 4,
        review: 'Excellent platform with robust features. It simplifies event management and provides great support.',
        reviewer: 'John Doe',
        position: 'Event Manager - Tech Conferences Inc.',
    },
    {
        id: 5,
        platform: 'Capterra',
        date: 'Jan. 2024',
        rating: 5,
        review: 'The platform is very user-friendly and customizable. The customer support is outstanding.',
        reviewer: 'Jane Smith',
        position: 'Marketing Director - Events Co.',
    },
    {
        id: 6,
        platform: 'G2',
        date: 'May. 2023',
        rating: 4,
        review: 'Great features and easy to navigate. The team is very supportive and responsive.',
        reviewer: 'Alice Johnson',
        position: 'Event Coordinator - Global Events',
    },
    {
        id: 7,
        platform: 'G2',
        date: 'Apr. 2024',
        rating: 4,
        review: 'dhbsjkdnskjdnskldsmkt.',
        reviewer: 'sdsdsd',
        position: 'Event Manager - Tech Conferences Inc.',
    },
    {
        id: 8,
        platform: 'Capterra',
        date: 'Jan. 2024',
        rating: 5,
        review: 'The platform is very user-friendly and customizable. The customer support is outstanding.',
        reviewer: 'Jane Smith',
        position: 'Marketing Director - Events Co.',
    },
    {
        id: 9,
        platform: 'G2',
        date: 'May. 2023',
        rating: 4,
        review: 'Great features and easy to navigate. The team is very supportive and responsive.',
        reviewer: 'Alice Johnson',
        position: 'Event Coordinator - Global Events',
    },
    {
        id: 10,
        platform: 'G2',
        date: 'Apr. 2024',
        rating: 4,
        review: 'Excellent platform with robust features. It simplifies event management and provides great support.',
        reviewer: 'John Doe',
        position: 'Event Manager - Tech Conferences Inc.',
    },
    {
        id: 11,
        platform: 'Capterra',
        date: 'Jan. 2024',
        rating: 5,
        review: 'The platform is very user-friendly and customizable. The customer support is outstanding.',
        reviewer: 'Jane Smith',
        position: 'Marketing Director - Events Co.',
    },
    {
        id: 12,
        platform: 'G2',
        date: 'May. 2023',
        rating: 4,
        review: 'Great features and easy to navigate. The team is very supportive and responsive.',
        reviewer: 'Alice Johnson',
        position: 'Event Coordinator - Global Events',
    },
    // Add more reviews here if needed
];

const SuccessCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 3) % reviews.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
    };
    
    return (
        <div className="text-center p-8 bg-gray-50 overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">What Success Looks Like</h2>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">4.5 <span className='text-yellow-500 text-2xl'>★★★★☆</span></h3>
                <p className='mt-3'>Based on +300 ratings</p>
            </div>
            <div className="relative">
            
                <div className="flex justify-center space-x-4 overflow-hidden">
                
                    {reviews.slice(index, index + 3).map((review) => (
                        <div key={review.id} className="review-card text-left bg-white p-6 rounded-lg shadow-lg w-80">
                            <div className='flex justify-between'>
                            <h3 className="text-xl font-semibold">{review.platform}</h3>
                            <p className="text-gray-500">{review.date}</p>
                            </div>
                            <p className="text-yellow-500 text-lg">
                                Overall: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </p>
                            <p className="my-4">"{review.review}"</p>
                            <div className="flex items-center justify-left mt-4">
                                <img
                                    src={`https://via.placeholder.com/50?text=${review.reviewer.charAt(0)}`}
                                    alt={review.reviewer}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold">{review.reviewer}</p>
                                    <p className="text-gray-500">{review.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-16">
            <button
                    onClick={handlePrev}
                    className="left-0 top-1/2 mr-5 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none"
                >
                    &#8592;
                </button>
                
                {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i * 3)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === i * 3 ? 'bg-gray-700' : 'bg-gray-300'}`}
                    />
                ))}
                <button
                    onClick={handleNext}
                    className=" right-0 top-1/2 ml-5 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}

export default SuccessCarousel;
