import React, { Component } from "react";
import { connect, DispatchProp } from "react-redux";
import { newGame } from "../store/actions";
import { AppState, PlayerSummary } from "../store/types";
import "../styles//PlayerItems.css";
import { Button, NoItems } from "./Common";
import Item from "./Item";
import Label from "./Label";

interface PlayerItemsProps {
	player: PlayerSummary;
}

export class PlayerItems extends Component<PlayerItemsProps & DispatchProp> {

	public onNewGameClick = () => {
		this.props.dispatch(newGame());
	}

	public renderElementsSummary() {
		const itemsSummaryRender: JSX.Element[] = [];

		this.props.player.itemsSummary.forEach((item, index) => {
			itemsSummaryRender.push(
				<tr key={index}>
					<td>
						<div className="itemContainer">
							<Item data={item} />
						</div>
					</td>
					<td>
						<div>{item.quantity}</div>
					</td>
					<td>
						<p>{item.points}</p>
					</td>
				</tr>,
			);
		});

		return itemsSummaryRender;
	}

	public render() {
		return (
			<div className="playerItems">
				<div id="playerItemsContainer">
					<Label>Player Items</Label>

					<div id="playerItemsSummaryContainer" className="fancyBoldFont">
						{ this.props.player.items.length ?
							<table id="playerItemsSummary">
								<thead>
									<tr>
										<th>Item</th>
										<th>Qty</th>
										<th>Score</th>
									</tr>
								</thead>
								<tbody>
									{this.renderElementsSummary()}
								</tbody>
							</table>
						: <NoItems>Yet to be</NoItems> }
					</div>
				</div>

				<div id="totalAndBonusesContainer">
					<Label>Bonuses {this.props.player.bonuses}</Label>
					<div id="totalAndBonuses" className="fancyBoldFont">
						<div id="total">
							<p>Total</p>
							<p>{this.props.player.total}</p>
						</div>
						<Button id="button" onClick={this.onNewGameClick}>New Game</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	player: state.player,
});

export default connect(mapStateToProps)(PlayerItems);
