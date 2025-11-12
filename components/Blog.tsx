
import React from 'react';
import { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
  onPostSelect: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ posts, onPostSelect }) => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Blog & Notícias</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Mantenha-se informado sobre as últimas novidades e dicas para a gestão do seu agronegócio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3 h-20">{post.title}</h3>
                <div className="mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <button 
                  onClick={() => onPostSelect(post)}
                  className="font-bold text-green-600 hover:text-green-800 transition-colors"
                >
                  Leia Mais &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
