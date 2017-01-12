export function deleteEvent(index) {
    return {
        type: 'DELETE_EVENT',
        index: index
    };
};

export function addEvent() {
    return {
        type: 'ADD_EVENT',
        event: {
            'title': 'Introduction To Redux',
            'topic': 'react-native',
            'organisator': 'Thomas Kolar',
            'time': '2017-01-13T19:00',
            'host': 'Thomas Kolar',
            'speakers': 'Thomas Tränkler, Thomas Kolar',
            'type': ['presentation', 'meetup'],
            'group': 'React Native Cologne',
            'location': {
                'name': 'SilverTours GmbH',
                'street': 'Dompropst-Ketzer-Straße 1-9',
                'city': 'Köln'
            }
        }
    };
};