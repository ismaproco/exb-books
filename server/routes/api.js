var express = require('express');
var router = express.Router();

var booksRest = function(req, res, next) {

    res.contentType('application/json');
    var books = [
        {
            id: '123451',
            name: 'This Changes Everything: Capitalism vs. the Climate',
            author: 'Naomi Klein',
            date: '07.05.2015',
            language: 'English',
            imageUrl: 'https://d.gr-assets.com/books/1320562005l/4214.jpg',
            description: "Naomi Klein's international bestseller This Changes Everything is a must-read on our future, one of the defining and most hopeful books of this era. Forget everything you think you know about global warming. It's not about carbon - it's about capitalism. The good news is that we can seize this crisis to transform our failed economic system and build something radically better. Once a decade, Naomi Klein writes a book that redefines its era. No Logo did so for globalization. The Shock Doctrine changed the way we think about austerity. In This Changes Everything, her most provocative and optimistic book yet.",
            color: '251688',
            type: 'paperback'
        },
        {
            id: '123452',
            name: 'Discovering Statistics Using IBM SPSS Statistics',
            author: 'Andy Field',
            date: '03.03.2012',
            language: 'English',
            imageUrl: 'https://d.gr-assets.com/books/1457284880l/27220736.jpg',
            description: 'Unrivalled in the way it makes the teaching of statistics compelling and accessible to even the most anxious of students, the only statistics textbook you and your students will ever need just got better! Lecturers/instructors - request a free digital inspection copy here or, if outside of Europe, here With a little help from his weird band of characters, Andy Field has transformed the way students engage with statistics. The Fourth Edition of the award-winning book continues, with its unique blend of humour and collection of bizarre examples, to bring statistics - from first principles to advanced concepts.',
            color: '251688',
            type: 'paperback'
        },
        {
            id: '123453',
            name: 'This Changes Everything: Capitalism vs. the Climate',
            author: 'Naomi Klein',
            date: '08.12.2010',
            language: 'English',
            imageUrl: 'https://d.gr-assets.com/books/1454285548l/26030703.jpg',
            description: 'this is a very strange description',
            color: '251688',
            type: 'paperback'
        },
        {
            id: '123454',
            name: 'This Changes Everything: Capitalism vs. the Climate',
            author: 'Naomi Klein',
            date: '31.01.1987',
            language: 'English',
            imageUrl: 'https://d.gr-assets.com/books/1430190122l/25159044.jpg',
            description: 'this is a very strange description',
            color: '251688',
            type: 'paperback'
        },
        {
            id: '123455',
            name: 'This Changes Everything: Capitalism vs. the Climate',
            author: 'Naomi Klein',
            date: '07.05.2015',
            language: 'English',
            imageUrl: 'https://d.gr-assets.com/books/1394798630l/99561.jpg',
            description: 'this is a very strange description',
            color: '251688',
            type: 'paperback'
        }
    ];


    // totalItems is huge value to mock the length of items
    var responseInfo = {
        totalItems: 50,
        books: books,
        skip: req.body.skip
    }


  res.send(JSON.stringify(responseInfo));
};

/* POST users listing. */
router.post('/', booksRest);
router.get('/', booksRest);

module.exports = router;
