import { Paper, Chip } from '@mui/material';
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';

interface ChipData {
    key?: number;
    label?: string;
    limit?: number
}

const ChipItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.1),
}));

function filterComponent(props: ChipData) {
    const { limit } = props
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'All' },
        { key: 1, label: 'Live' },
        { key: 2, label: 'Music' },
        { key: 3, label: 'Sports' },
        { key: 4, label: 'Games' },
        { key: 5, label: 'Comedy' },
        { key: 6, label: 'Playlists' },
        { key: 7, label: 'Podcasts' },
        { key: 8, label: 'Mr Beast' },
        { key: 7, label: 'Recently uploaded' },
        { key: 9, label: 'React' },
        { key: 10, label: 'Kendrick Lamar' },
        { key: 11, label: 'Trending' },
    ]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                mt: -1,
            }}
            component="ul"
        >
            {chipData.slice(0, limit).map((data) => {
                let icon;


                return (
                    <ChipItem key={data.key}>
                        <Chip
                            sx={{ borderRadius: "8px", mx: 1,fontWeight:"bold" }}
                            color={data.label == "All" ? "primary" : "secondary"}
                            icon={icon}
                            label={data.label}
                            // onDelete={handleDelete(data)}
                        />
                    </ChipItem>
                );
            })}
        </Paper>
    )
}

export default filterComponent