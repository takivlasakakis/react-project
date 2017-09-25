// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		searchTerm: "this is some sort of debug statement"
	// 	};

	// 	// this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	// } check out hour 4:59 ish

	state = {
		searchTerm: ""
	};
	componentDidMount() {}
	props: {
		shows: Array<Show>
	};

	handleSearchTermChange = (
		event: SyntheticKeyboardEvent & { target: HTMLInputElement }
	) => {
		this.setState({ searchTerm: event.target.value });
	}; // stage two proposal

	render() {
		return (
			<div className="search">
				<Header
					searchTerm={this.state.searchTerm}
					showSearch
					handleSearchTermChange={this.handleSearchTermChange}
				/>
				<div>
					{this.props.shows
						.filter(
							show =>
								`${show.title} ${show.description}`
									.toUpperCase()
									.indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(show => <ShowCard key={show.imdbID} {...show} />)}
				</div>
			</div>
		);
	}
}

export default Search;
