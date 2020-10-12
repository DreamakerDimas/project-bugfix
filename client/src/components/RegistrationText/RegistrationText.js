import React from 'react';
import articles from './Articles.json';
import styles from './RegistrationText.module.sass';

const RegistrationText = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.articlesMainContainer}>
                <div className={styles.ColumnContainer}>
                    {
                    articles.mainArticles.map((elem, index) => (
                        <div key={index}>
                            <div className={styles.headerArticle}>{elem.header}</div>
                            <div className={styles.article}>{elem.article}</div>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.ColumnContainer}>
                    {
                    articles.otherArticles.map((elem, index) => (
                        <div key={index}>
                            <div className={styles.headerArticle}>{elem.header}</div>
                            <div className={styles.article}>{elem.article}</div>
                        </div>
                    ))
                    }
                    <div className={styles.headerArticle}>I have other questions! How can I get in touch with Squadhelp?</div>
                    <div className={styles.article}>
                        Check out our <span className={styles.orangeSpan}>FAQs</span> or send us a <span className={styles.orangeSpan}>message</span>. 
                        For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a 
                        <span className={styles.orangeSpan}>Branding Consultation</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationText;