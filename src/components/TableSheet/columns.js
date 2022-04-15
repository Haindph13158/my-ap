export const columnAttendance = [
    {
        title: 'Ngày học ',
        accessor: 'day',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 155,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 155,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
        }
    },
    {
        title: 'Ca',
        accessor: 'slot',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 50,
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
        }
    },
    {
        title: 'Trạng thái',
        accessor: 'val_text',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 100,
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
        },
     
    }
]

export const columnPoint = [
    {
        title: 'Tên đầu điểm',
        accessor: 'grade_name',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 155,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 155,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
        }
    },
    {
        title: 'Trọng số',
        accessor: 'grade_weight',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 50,
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
        }
    },
    {
        title: 'Điểm',
        accessor: 'grade_result',
        styleHeader: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        },
        styleRow: {
            borderLeftColor: 'rgba(0,0,0,0.1)',
            borderLeftWidth: 1,
            width: 100,
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            color: 'black'
        }
    }
]