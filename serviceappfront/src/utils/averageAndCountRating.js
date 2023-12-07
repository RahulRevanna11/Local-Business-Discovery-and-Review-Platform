function calculateAverageAndCountRatings(reviews) {
    
    const ratingStats = [
       { count: 0, sum: 0 },
    { count: 0, sum: 0 },
      { count: 0, sum: 0 },
     { count: 0, sum: 0 },
     { count: 0, sum: 0 },
    ]
  
    
    reviews.forEach((review) => {
      const rating = review?.rating;
  
      // Check if the rating is in the valid range (1-5)
      if (rating >= 1 && rating <= 5) {
        ratingStats[rating-1].count++;
        ratingStats[rating-1].sum+=rating
      }
    });
  
    // Calculate the average for each rating
    var avg=0;
    const averageRatings = {};
    for (let ratingValue in ratingStats) {
     
        avg+=ratingStats[ratingValue].sum
       ratingStats[ratingValue].sum =ratingStats[ratingValue].count===0?0: (ratingStats[ratingValue].sum)/(ratingStats[ratingValue].count)
  
      // Avoid division by zero
    
      
    }
      avg=avg/(reviews?.length)
    return {  ratingStats,avg };
  }
export default calculateAverageAndCountRatings;