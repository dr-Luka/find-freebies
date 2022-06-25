import axios from "axios";
import { useState, useEffect } from "react";
import { token, baseURL } from "../api/apiSettings";
import { useLocation } from "react-router-dom";
import { useGeolocated } from "react-geolocated";

import GoBack from "../layout/BackButton";
import HomePostCard from "../layout/PostsCard";

export default function SearchResults() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    async function fetchResults() {
      try {
        if (coords && isGeolocationAvailable && isGeolocationEnabled) {
          const search = location.state.search;
          const fetchData = async () => {
            const config = {
              headers: { Authorization: `Bearer ${token}` },
            };
            const response = await axios.get(
              `${baseURL}posts/search?search=${search}&per_page=12&types=offer&sources=groups,trashnothing,open_archive_groups&latitude=${
                coords && coords.latitude
              }&longitude=${coords && coords.longitude}&radius=25000`,
              config
            );
            if (response) {
              setPosts(response.data.posts);
              setLoading(false);
            }
          };
          fetchData();
        } else {
          setLoading(false);
        }
      } catch (error) {
        setError(error.toString());
      }
    }
    fetchResults();
  }, [location, coords, isGeolocationAvailable, isGeolocationEnabled]);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : (
    coords && (
      <div className="page">
        <GoBack />
        <h1>Search Results</h1>
        <div className="featuredPosts">
          {posts.length ? (
            posts.map(function (Post) {
              const { content, photos, post_id, title, user_id } = Post;
              return (
                <HomePostCard
                  key={post_id}
                  post_id={post_id}
                  title={title}
                  description={content}
                  photos={photos && photos[0].thumbnail}
                  user={user_id}
                />
              );
            })
          ) : (
            <p>No Posts to Show</p>
          )}
        </div>
      </div>
    )
  );
}
