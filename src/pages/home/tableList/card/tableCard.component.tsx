import * as React from 'react';
import {ReactNode} from 'react';
import {Card, CardActions, CardText, CardTitle, FlatButton, FontIcon} from 'material-ui';
import {participantsToBoolean} from './tableCard.helper';
import './tableCard.scss';
import {Table, TableId} from 'domain/table.interface';

type IProps = {
    table: Table;
    onDelete: (id: TableId) => void;
    onEdit: (id: TableId) => void;
}

function renderPersons(participants: number): ReactNode[] {
    const activeClassName = 'material-icons';
    const inactiveClassName = `${activeClassName} table-card__person_mode_inactive`;

    return participantsToBoolean(participants).map((isActive, index) =>
        <FontIcon key={index} className={isActive ? activeClassName : inactiveClassName}>person</FontIcon>
    );
}

const TableCard: React.StatelessComponent<IProps> = ({table, onEdit, onDelete}) => {
    const {id, name, participants} = table;

    return (
        <Card className="table-card">
            <CardTitle title={name}/>
            <CardText className="table-card__persons">
                {renderPersons(participants)}
            </CardText>
            <CardActions className="table-card__actions">
                <FlatButton onClick={() => onEdit(id)}>Edit</FlatButton>
                <FlatButton onClick={() => onDelete(id)} secondary={true}>Delete</FlatButton>
            </CardActions>
        </Card>
    );
};

export default TableCard;