import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const GuideUrbex = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Guide pour faire de l'urbex en toute sécurité
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        1. Préparation et recherche
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Renseignez-vous"
                                secondary="Avant de visiter un lieu, faites des recherches approfondies. Utilisez des forums d'urbex, des blogs, et des groupes sur les réseaux sociaux pour obtenir des informations sur les lieux, les conditions d'accès, et les risques potentiels."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Repérage"
                                secondary="Utilisez Google Maps ou d'autres outils de cartographie pour repérer les lieux et planifier votre itinéraire."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        2. Équipement
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Vêtements"
                                secondary="Portez des vêtements robustes et confortables. Les pantalons longs et les manches longues vous protégeront des égratignures et des piqûres d'insectes."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Chaussures"
                                secondary="Portez des chaussures de randonnée ou des bottes solides pour éviter les blessures sur des terrains accidentés."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Sac à dos"
                                secondary="Emportez un sac avec les essentiels : une trousse de premiers soins, de l'eau, des collations, une lampe de poche avec des piles de rechange, un téléphone portable avec une batterie externe, et des gants de travail."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Protection"
                                secondary="Envisagez de porter un masque pour éviter d'inhaler de la poussière ou des substances potentiellement dangereuses, et des lunettes de protection pour protéger vos yeux."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        3. Sécurité
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Ne partez jamais seul"
                                secondary="Explorez toujours en groupe ou avec au moins une autre personne. En cas de problème, il est crucial d'avoir quelqu'un pour vous aider."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Discrétion"
                                secondary="Soyez discret pour éviter d'attirer l'attention. Ne faites pas de bruit inutile et évitez d'endommager les lieux."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Évitez les endroits dangereux"
                                secondary="Si un bâtiment semble instable, ne prenez pas de risques inutiles. Ne grimpez pas sur des structures fragiles et évitez les sous-sols inondés ou les zones contenant des substances dangereuses."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Respectez les lois"
                                secondary="Rappelez-vous que pénétrer dans une propriété privée sans autorisation est illégal. Cherchez des lieux avec un accès légal si possible."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        4. Respect des lieux
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Ne laissez aucune trace"
                                secondary="Emportez tous vos déchets avec vous. Ne vandalisez pas les lieux et n'emportez rien comme souvenir."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Respectez l'histoire"
                                secondary="Traitez les lieux avec respect. Ils ont souvent une valeur historique ou sentimentale pour certaines personnes."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        5. Documentation
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Photos et vidéos"
                                secondary="Documentez votre exploration avec des photos et des vidéos. Non seulement cela vous permet de partager vos aventures, mais cela contribue également à la documentation historique des lieux."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Partagez vos découvertes"
                                secondary="Partagez vos expériences et photos sur des forums ou réseaux sociaux dédiés à l'urbex. Cela peut aider d'autres explorateurs et enrichir la communauté."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h5" gutterBottom>
                        6. En cas d'urgence
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Trousse de secours"
                                secondary="Ayez toujours une trousse de secours avec vous. Sachez comment traiter les coupures, les éraflures, et autres blessures mineures."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Numéros d'urgence"
                                secondary="Connaissez les numéros d'urgence locaux et assurez-vous d'avoir un téléphone avec vous en cas de besoin."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Plans de secours"
                                secondary="Ayez toujours un plan de secours. Sachez comment sortir rapidement d'un lieu en cas de danger."
                            />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}

export default GuideUrbex;
