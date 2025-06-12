import React, { useState } from "react";

let database = ['Readability',  'Performance' ,'Security' ,'Documentation','Testing'];
const FeedbackSystem = () => {
    const [votes, setVotes] = useState(
        database.map(() => ({ upvote: 0, downvote: 0 }))
    );

    const handleUpvote = (index) => {
        setVotes(votes =>
            votes.map((vote, i) =>
                i === index ? { ...vote, upvote: vote.upvote + 1 } : vote
            )
        );
    };

    const handleDownvote = (index) => {
        setVotes(votes =>
            votes.map((vote, i) =>
                i === index ? { ...vote, downvote: vote.downvote + 1 } : vote
            )
        );
    };

    return (
        <div className="my-0 mx-auto text-center w-mx-1200">
            <div className="flex wrap justify-content-center mt-30 gap-30">
                {database.map((item, index) => {
                    return (
                        <div className="pa-10 w-300 card" key={index}>
                            <h2>{item}</h2>
                            <div className="flex my-30 mx-0 justify-content-around">
                                <button
                                    className="py-10 px-15"
                                    data-testid={`upvote-btn-${index}`}
                                    onClick={() => handleUpvote(index)}
                                >
                                    👍 Upvote
                                </button>
                                <button
                                    className="py-10 px-15 danger"
                                    data-testid={`downvote-btn-${index}`}
                                    onClick={() => handleDownvote(index)}
                                >
                                    👎 Downvote
                                </button>
                            </div>
                            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                                Upvotes: <strong>{votes[index].upvote}</strong>
                            </p>
                            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                                Downvotes: <strong>{votes[index].downvote}</strong>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeedbackSystem;
