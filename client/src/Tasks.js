import { Component } from "react";
import {
    getEvents,
    getNotices,
} from "./services/taskServices";

class Tasks extends Component {
    state = { events: [], notices: [] };

    async componentDidMount() {
        try {
            const { data } = await getEvents();
            this.setState({ events: data });
            const { data: data2 } = await getNotices();
            this.setState({ notices: data2 });
        } catch (error) {
            console.log(error);
        }
    }
}

export default Tasks;
