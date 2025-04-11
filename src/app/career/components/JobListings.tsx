'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Job } from '../data';

const categories = [
  'All Categories',
  'Data Engineering',
  'AI Development',
  'Software Engineering',
  'Chatbot Development',
];

type Props = {
  onSearch: (searchText: string, selectedCategory: string) => void;
};

const JobSearchBar = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText, selectedCategory);
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row border overflow-hidden"
    >
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by Job Title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-green-700"
      />

      {/* Category Dropdown */}
      <div className="relative border-t sm:border-t-0 sm:border-l">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="appearance-none border border-gray-300 px-4 py-3 pr-8 bg-white text-gray-700 focus:outline-green-700"
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-green-800 text-white px-6 py-3 font-medium hover:bg-green-700 transition"
      >
        Search
      </button>
    </form>
  );
};

type JobListingsProps = {
  initialJobs: Job[];
};

const JobListings = ({ initialJobs }: JobListingsProps) => {
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const router = useRouter();
  
  const handleSearch = (searchText: string, selectedCategory: string) => {
    // Filter jobs based on search text and category
    const filtered = initialJobs.filter(job => {
      const matchesSearch = searchText === '' || 
        job.title.toLowerCase().includes(searchText.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Categories' || 
        job.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredJobs(filtered);
  };
  
  const handleJobClick = (jobId: string) => {
    // Check if the job exists in our data
    const jobExists = initialJobs.some(job => job.id === jobId);
    
    if (jobExists) {
      router.push(`/career/${jobId}`);
    } else {
      // If job doesn't exist, navigate to 404 page
      router.push('/404');
    }
  };
  
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Job Openings</h2>
        <JobSearchBar onSearch={handleSearch} />
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Results: {filteredJobs.length} vacancies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job.id)}
                className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative hover:bg-green-100"
              >
                <div className="text-sm text-gray-500 font-medium mb-2">{job.category}</div>

                <div className="text-green-800 font-semibold text-lg mb-2">{job.title}</div>

                <div className="text-sm text-gray-700 mb-1">{job.type}</div>
                <div className="text-sm text-gray-700 mb-2 font-bold">{job.locationType}</div>

                <div className="text-xs text-gray-500">
                  {job.status === 'active'
                    ? <>Posted {formatDistanceToNow(job.posted, { addSuffix: true })}</>
                    : <span className="text-red-500 font-bold">(closed)</span>}
                </div>

                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-green-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings; 